// // var cnv;
// //
// // function centerCanvas() {
// //   cnv = createCanvas(windowWidth, windowHeight);
// //   var x = (windowWidth - width) / 2;
// //   var y = (windowHeight - height) / 2;
// //   if (windowWidth > 450){
// //     LIMIT = 15;
// //   } else { LIMIT = 8; }
// //   cnv.position(x, y);
// //   return cnv;
// // }
// //
// // function windowResized() {
// //   centerCanvas();
// // }
// //
// // function setup() {
// //   cnv = createCanvas(windowWidth, windowHeight);
// //   centerCanvas();
// // }
// //
// // function draw() {
// //   // fill(253,240,231,125);
// //   // rect(0,0,width,height);
// // }
//
//
//
//
//
//
//   var Engine = Matter.Engine,
//     Render = Matter.Render,
//     Runner = Matter.Runner,
//     Composites = Matter.Composites,
//     Common = Matter.Common,
//     MouseConstraint = Matter.MouseConstraint,
//     Mouse = Matter.Mouse,
//     World = Matter.World,
//     Bodies = Matter.Bodies;
//
//   // create engine
//   var engine = Engine.create(),
//     world = engine.world;
//
//   // create renderer
//   var render = Render.create({
//     element: document.body,
//     engine: engine,
//     options: {
//       width: 800,
//       height: 600,
//       showAngleIndicator: true,
//     }
//   });
//
//   Render.run(render);
//
//   // create runner
//   var runner = Runner.create();
//   Runner.run(runner, engine);
//
//   // add bodies
//   var stack = Composites.stack(20, 20, 10, 5, 0, 0, function(x, y) {
//     var sides = Math.round(Common.random(1, 8));
//
//     // triangles can be a little unstable, so avoid until fixed
//     sides = (sides === 3) ? 4 : sides;
//
//     // round the edges of some bodies
//     var chamfer = null;
//     if (sides > 2 && Common.random() > 0.7) {
//       chamfer = {
//         radius: 10
//       };
//     }
//
//     switch (Math.round(Common.random(0, 1))) {
//       case 0:
//         if (Common.random() < 0.8) {
//           return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50), { chamfer: chamfer });
//         } else {
//           return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), { chamfer: chamfer });
//         }
//       case 1:
//         return Bodies.polygon(x, y, sides, Common.random(25, 50), { chamfer: chamfer });
//     }
//   });
//
//   World.add(world, stack);
//
//   World.add(world, [
//     // walls
//     Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
//     Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
//     Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
//     Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
//   ]);
//
//   // add mouse control
//   var mouse = Mouse.create(render.canvas),
//     mouseConstraint = MouseConstraint.create(engine, {
//       mouse: mouse,
//       constraint: {
//         stiffness: 0.2,
//         render: {
//           visible: false
//         }
//       }
//     });
//
//   World.add(world, mouseConstraint);
//
//   // keep the mouse in sync with rendering
//   render.mouse = mouse;
//
//   // fit the render viewport to the scene
//   Render.lookAt(render, {
//     min: { x: 0, y: 0 },
//     max: { x: 800, y: 600 }
//   });
//
