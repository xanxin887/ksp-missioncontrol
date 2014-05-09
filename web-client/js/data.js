/*
 * data.js - Various constants are defiend here.
 * For a license, see: https://github.com/voneiden/ksp-missioncontrol/blob/master/LICENSE.md
 */

window.globals = {};
globals.Vector = Vector
globals.Matrix = Matrix
globals.mouse_left = false;
globals.mouse_left_x = false;
globals.mouse_left_y = false;
globals.mouse_left_dragging = false;
globals.mouse_right = false;
globals.mouse_right_y = false;

globals.plotters = new Array();
globals.attitudes = new Array();
globals.groundtracks = new Array();
globals.status = new Array();

globals.ut = 0;
globals.active_vessel = false;


globals.trackers = new Array();
globals.vessels = new Array();
// TODO this default data is invalid due to frame rotation?
// ang_v seem to be in rads, fixing to degs for kerbin only
globals.celestials = {
 "Sun": {
  "alt_atm":0,
  "ang_v":1.45444104333e-05,
  "initial_rotation":0,
  "mu":1.17233279483e+18,
  "name":"Sun",
  "radius":261600000,
  "ref":"Sun",
  "rotation_angle":0.230238301595,
  "soi":1E+99,
  "position":Vector.create([0,0,0]),
  "velocity":Vector.create([0,0,0]),
  "t0":0,
  "childs":["Moho", "Eve", "Kerbin", "Duna", "Dres", "Jool", "Eeloo"]},
 "Kerbin": {
  "alt_atm":70000,
  "ang_v":0.0166666667,
  "initial_rotation":90,
  "mu":3531600000000,
  "name":"Kerbin",
  "position":Vector.create([1112854808.61815, -13554232149.5411, 0]),
  "radius":600000,
  "ref":"Sun",
  "rotation_angle":90,
  "rotation_t0": 0,
  "soi":84159286.4796,
  "velocity":Vector.create([-9253.36441785446, -759.736970861599, 0]),
  "t0":0,
  "childs":["Mun", "Minmus"]},
 "Mun": {
  "alt_atm":0,
  "ang_v":4.52078545581e-05,
  "initial_rotation":230,
  "mu":65138397520.8,
  "name":"Mun",
  "position":Vector.create([11985669.5927997, -586280.14825446, 0]),
  "radius":200000,
  "ref":"Kerbin",
  "rotation_angle":230.715641202,
  "soi":2429559.11656,
  "velocity":Vector.create([-26.5042220205518, -541.84640463427, 0]),
  "t0":0},
 "Minmus": {
  "alt_atm":0,
  "ang_v":0.000155524388792,
  "initial_rotation":230,
  "mu":1765800026.31,
  "name":"Minmus",
  "position":Vector.create([13696325.0840553, -44690894.9086166, 4912696.96387534]),
  "radius":60000,
  "ref":"Kerbin",
  "rotation_angle":232.461954116,
  "soi":2247428.3879,
  "velocity":Vector.create([-262.092417803864, -80.299084673002, 0.216938510793855]),
  "t0":0},
 "Moho": {
  "alt_atm":0,
  "ang_v":5.1927151299e-06,
  "initial_rotation":190,
  "mu":1.68609378655e+11,
  "name":"Moho",
  "position":Vector.create([-6221077296.99676, -1071317042.8931, -198406828.384465]),
  "radius":250000,
  "ref":"Sun",
  "rotation_angle":190.082200782,
  "soi":9646663.02333,
  "velocity":Vector.create([-2012.46874189632, 11932.59520314, -1435.00345847741]),
  "t0":0},
 "Eve": {
  "alt_atm":90000,
  "ang_v":7.80519913935e-05,
  "initial_rotation":0,
  "mu":8.17173022921e+12,
  "name":"Eve",
  "position":Vector.create([-1777082717.49926, -9770719596.74465, 568081.651163044]),
  "radius":700000,
  "ref":"Sun",
  "rotation_angle":1.23556455017,
  "soi":85109364.7382,
  "velocity":Vector.create([-10628.9174508819, 1932.97430533409, -396.136793948843]),
  "t0":0},
 "Duna": {
  "alt_atm":50000,
  "ang_v":9.59003448391e-05,
  "initial_rotation":90,
  "mu":3.01363211975e+11,
  "name":"Duna",
  "position":Vector.create([-16486020957.0888, 14237920853.5357, 32844.3392018417]),
  "radius":320000,
  "ref":"Sun",
  "rotation_angle":91.5181043343,
  "soi":47921949.3697,
  "velocity":Vector.create([4670.72010962438, 5409.05063517528, -7.48386399789676]),
  "t0":0},
 "Ike": {
  "alt_atm":0,
  "ang_v":9.59003434681e-05,
  "initial_rotation":0,
  "mu":18568368573.1,
  "name":"Ike",
  "position":Vector.create([3196412.19549553, -346743.551751201, 11024.5293565938]),
  "radius":130000,
  "ref":"Duna",
  "rotation_angle":1.51810427032,
  "soi":1049598.93931,
  "velocity":Vector.create([-23.9299563507226, -304.489497558196, -0.168548564999866]),
  "t0":0},
 "Jool": {
  "alt_atm":200000,
  "ang_v":0.000174532925199,
  "initial_rotation":0,
  "mu":282528004209995,
  "name":"Jool",
  "position":Vector.create([52694246849.5192, 38657769869.1363, 164220548.88244]),
  "radius":6000000,
  "ref":"Sun",
  "rotation_angle":2.76285961914,
  "soi":2455985185.42,
  "velocity":Vector.create([2584.32036572502, -3484.51014091063, 98.2038460136405]),
  "t0":0},
 "Laythe": {
  "alt_atm":50000,
  "ang_v":0.000118593454725,
  "initial_rotation":90,
  "mu":1.96200002924e+12,
  "name":"Laythe",
  "position":Vector.create([2224426.50413701, -27092836.3728808, 0]),
  "radius":500000,
  "ref":"Jool",
  "rotation_angle":91.8773366553,
  "soi":3723645.81113,
  "velocity":Vector.create([-3213.03266150229, -263.806226944717, 0]),
  "t0":0},
 "Vall": {
  "alt_atm":0,
  "ang_v":5.92965422597e-05,
  "initial_rotation":0,
  "mu":2.07481499474e+11,
  "name":"Vall",
  "position":Vector.create([31540758.3502951, 29449544.4224234, 0]),
  "radius":300000,
  "ref":"Jool",
  "rotation_angle":0.938665397477,
  "soi":2406401.44479,
  "velocity":Vector.create([1746.25721592197, -1870.25682277177, 0]),
  "t0":0},
 "Bop": {
  "alt_atm":0,
  "ang_v":1.15392098491e-05,
  "initial_rotation":230,
  "mu":2486834944.41,
  "name":"Bop",
  "position":Vector.create([106296121.339107, -33078035.1375282, 29189398.9437976]),
  "radius":65000,
  "ref":"Jool",
  "rotation_angle":230.182665912,
  "soi":1221060.86284,
  "velocity":Vector.create([-134.745608834936, -1641.02526218456, 5.41702476526804]),
  "t0":0},
 "Tylo": {
  "alt_atm":0,
  "ang_v":2.96479661175e-05,
  "initial_rotation":0,
  "mu":2.8252800421e+12,
  "name":"Tylo",
  "position":Vector.create([5605253.65111862, -68270280.0016549, 47.5981945108581]),
  "radius":600000,
  "ref":"Jool",
  "rotation_angle":0.469327870387,
  "soi":10856518.3684,
  "velocity":Vector.create([-2024.07464996349, -166.184951051611, -0.886139882104932]),
  "t0":0},
 "Gilly": {
  "alt_atm":0,
  "ang_v":0.000222374280912,
  "initial_rotation":5,
  "mu":8289449.81472,
  "name":"Gilly",
  "position":Vector.create([-11385951.6487929, -26598367.9175732, 4860888.52583644]),
  "radius":13000,
  "ref":"Eve",
  "rotation_angle":8.52018921568,
  "soi":126123.271705,
  "velocity":Vector.create([-536.054541716523, -101.143413408482, -7.92169041863177]),
  "t0":0},
 "Pol": {
  "alt_atm":0,
  "ang_v":6.96658964958e-06,
  "initial_rotation":25,
  "mu":721702080,
  "name":"Pol",
  "position":Vector.create([162226311.431227, 24711612.4981422, 12126445.9020914]),
  "radius":44000,
  "ref":"Jool",
  "rotation_angle":25.1102812473,
  "soi":1042138.8923,
  "velocity":Vector.create([402.472526168225, -1304.16880245107, 25.4774964178638]),
  "t0":0},
 "Dres": {
  "alt_atm":0,
  "ang_v":0.00018055130193,
  "initial_rotation":25,
  "mu":21484488600,
  "name":"Dres",
  "position":Vector.create([-4325934400.20696, -46381809710.7465, -4075490923.54781]),
  "radius":138000,
  "ref":"Sun",
  "rotation_angle":27.8581306405,
  "soi":32832839.5768,
  "velocity":Vector.create([-4609.92118198925, 429.056140069073, -0.567220213670013]),
  "t0":0},
 "Eeloo": {
  "alt_atm":0,
  "ang_v":0.000322876942815,
  "initial_rotation":25,
  "mu":74410814527.0,
  "name":"Eeloo",
  "position":Vector.create([92172141985.5264, -65225446623.2119, 11977916016.9309]),
  "radius":210000,
  "ref":"Sun",
  "rotation_angle":30.1111483191,
  "soi":119082941.648,
  "velocity":Vector.create([-1600.07921979076, -2253.24728088245, 51.8022242993292]),
  "t0":0}
 }


