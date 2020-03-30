
//-----------------------w = 32-----------------------------------
var pc1_32 = [57, 49, 41, 33, 25, 17, 9 ,
    1 , 58, 50, 42, 34, 26, 18,
    10, 2 , 59, 51, 43, 35, 27,
    19, 11, 3 , 60, 52, 44, 36,
    63, 55, 47, 39, 31, 23, 15,
    7 , 62, 54, 46, 38, 30, 22,
    14, 6 , 61, 53, 45, 37, 29,
    21, 13, 5 , 28, 20, 12, 4];

var pc2_32 = [14, 17, 11, 24, 1 , 5 , 3 , 28,
    15, 6 , 21, 10, 23, 19, 12, 4 ,
    26, 8 , 16, 7 , 27, 20, 13, 2 ,
    41, 52, 31, 37, 47, 55, 30, 40,
    51, 45, 33, 48, 44, 49, 39, 56,
    34, 53, 46, 42, 50, 36, 29, 32];

var IP_32 = [
    58, 50, 42, 34, 26, 18, 10, 2, 
    60, 52, 44, 36, 28, 20, 12, 4, 
    62, 54, 46, 38, 30, 22, 14, 6, 
    64, 56, 48, 40, 32, 24, 16, 8, 
    57, 49, 41, 33, 25, 17, 9, 1, 
    59, 51, 43, 35, 27, 19, 11, 3, 
    61, 53, 45, 37, 29, 21, 13, 5, 
    63, 55, 47, 39, 31, 23, 15, 7
];

var invIP_32 = [
    40, 8, 48, 16, 56, 24, 64, 32, 
    39, 7, 47, 15, 55, 23, 63, 31, 
    38, 6, 46, 14, 54, 22, 62, 30, 
    37, 5, 45, 13, 53, 21, 61, 29, 
    36, 4, 44, 12, 52, 20, 60, 28, 
    35, 3, 43, 11, 51, 19, 59, 27, 
    34, 2, 42, 10, 50, 18, 58, 26, 
    33, 1, 41, 9, 49, 17, 57, 25
];

var EP_32 = [
    32, 1, 2, 3, 4, 5, 
    4, 5, 6, 7, 8, 9, 
    8, 9, 10, 11, 12, 13, 
    12, 13, 14, 15, 16, 17, 
    16, 17, 18, 19, 20, 21, 
    20, 21, 22, 23, 24, 25, 
    24, 25, 26, 27, 28, 29, 
    28, 29, 30, 31, 32, 1
];

var P_32 = [
    16, 7, 20, 21, 29, 12, 28, 17, 
    1, 15, 23, 26, 5, 18, 31, 10, 
    2, 8, 24, 14, 32, 27, 3, 9, 
    19, 13, 30, 6, 22, 11, 4, 25
];

var sBoxes_32 = [
    [   [14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],  
        [0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],  
        [4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],  
        [15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13] ],

    [   [15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10] , 
        [3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],  
        [0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],  
        [13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9] ],

    [   [10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],  
        [13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],  
        [13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],  
        [1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12] ],

    [   [7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],  
        [13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],  
        [10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],  
        [3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14] ],

    [   [2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],  
        [14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],  
        [4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],  
        [11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3] ],

    [   [12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],  
        [10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],  
        [9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],  
        [4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13] ],

    [   [4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1] , 
        [13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],  
        [1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],  
        [6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12] ],

    [   [13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],  
        [1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],  
        [7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],  
        [2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11] ]
];

//------------------------------w = 16---------------------------------------

var pc1_16 = [5, 30, 19, 28, 10, 4, 2, 11, 1, 21, 15, 12, 27, 18, 25, 17, 26, 31, 14, 6, 7, 9, 3, 22, 29, 20, 13, 23]; // every eigth bit is dropped
var pc2_16 = [7, 27, 15, 5, 11, 4, 20, 21, 23, 17, 22, 28, 19, 12, 26, 24, 1, 14, 6, 25, 2, 9, 8, 18]; // 3, 10, 13, 16 dropped

var IP_16 = [2, 1, 27, 8, 19, 3, 12, 32, 15, 9, 28, 26, 24, 23, 14, 10, 22, 20, 4, 17, 7, 11, 31, 6, 25, 21, 30, 18, 5, 13, 16, 29];

var invIP_16 = [2, 1, 6, 19, 29, 24, 21, 4, 10, 16, 22, 7, 30, 15, 9, 31, 20, 28, 5, 18, 26, 17, 14, 13, 25, 12, 3, 11, 32, 27, 23, 8];

var EP_16 = [   16, 1, 2, 3, 4, 5, 
                4, 5, 6, 7, 8, 9, 
                8, 9, 10, 11, 12, 13, 
                12, 13, 14, 15, 16, 1 ]; // 16 -> 24 bits expansion

var sBoxes_16 = [
    [   [14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],  
        [0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],  
        [4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],  
        [15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13] ],

    [   [15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10] , 
        [3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],  
        [0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],  
        [13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9] ],

    [   [10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],  
        [13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],  
        [13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],  
        [1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12] ],

    [   [7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],  
        [13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],  
        [10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],  
        [3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14] ]
];

var P_16 = [8, 6, 4, 7, 3, 15, 9, 2, 12, 11, 1, 13, 16, 5, 10, 14];

//------------------------------w = 64--------------------------------------

var pc1_64 = [ 12, 98, 74, 116, 19, 30, 25, 111, 45, 101, 121, 13, 93, 113, 83, 26, 76, 44, 54, 31, 51, 106, 21, 28, 82, 23, 35, 118, 71, 50, 127, 22, 27, 95, 105, 1, 89, 63, 10, 102, 58, 46, 41, 125, 34, 59, 29, 115, 17, 100, 66, 77, 70, 90, 79, 117, 18, 122, 6, 38, 65, 123, 36, 3, 85, 84, 68, 60, 52, 39, 114, 119, 33, 55, 5, 15, 43, 62, 97, 103, 47, 92, 107, 78, 37, 126, 99, 67, 73, 69, 7, 53, 42, 20, 61, 109, 81, 91, 57, 124, 75, 9, 11, 110, 87, 86, 49, 4, 14, 2, 108, 94]; // 128-16 = 112 bits
var pc2_64 = [ 38, 3, 88, 19, 67, 69, 6, 108, 10, 40, 54, 100, 32, 34, 4, 42, 61, 47, 60, 75, 68, 23, 30, 98, 1, 80, 12, 31, 56, 44, 9, 7, 92, 14, 57, 36, 86, 39, 70, 109, 96, 26, 93, 77, 66, 52, 112, 95, 110, 64, 59, 102, 37, 71, 72, 46, 43, 8, 76, 58, 15, 5, 73, 11, 17, 106, 20, 22, 28, 24, 79, 62, 48, 104, 53, 65, 50, 84, 81, 25, 105, 85, 78, 2, 33, 101, 97, 99, 55, 49, 87, 21, 51, 82, 63, 94 ] // drop any 16

var IP_64 = [ 86, 87, 112, 41, 64, 13, 32, 74, 81, 61, 120, 6, 126, 20, 110, 30, 8, 91, 78, 56, 39, 43, 17, 75, 52, 37, 90, 1, 115, 4, 25, 34, 58, 79, 45, 66, 82, 98, 15, 96, 119, 31, 54, 73, 71, 80, 40, 38, 128, 127, 23, 113, 106, 69, 26, 114, 70, 55, 123, 102, 88, 124, 7, 68, 109, 9, 59, 60, 72, 28, 99, 53, 76, 107, 85, 116, 21, 27, 57, 12, 49, 35, 104, 29, 121, 65, 42, 10, 11, 18, 111, 105, 118, 125, 89, 101, 84, 44, 19, 47, 14, 16, 5, 36, 103, 93, 117, 100, 2, 48, 46, 63, 3, 92, 62, 77, 97, 94, 83, 50, 22, 24, 95, 51, 108, 33, 67, 122];
var invIP_64 = [ 28, 109, 113, 30, 103, 12, 63, 17, 66, 88, 89, 80, 6, 101, 39, 102, 23, 90, 99, 14, 77, 121, 51, 122, 31, 55, 78, 70, 84, 16, 42, 7, 126, 32, 82, 104, 26, 48, 21, 47, 4, 87, 22, 98, 35, 111, 100, 110, 81, 120, 124, 25, 72, 43, 58, 20, 79, 33, 67, 68, 10, 115, 112, 5, 86, 36, 127, 64, 54, 57, 45, 69, 44, 8, 24, 73, 116, 19, 34, 46, 9, 37, 119, 97, 75, 1, 2, 61, 95, 27, 18, 114, 106, 118, 123, 40, 117, 38, 71, 108, 96, 60, 105, 83, 92, 53, 74, 125, 65, 15, 91, 3, 52, 56, 29, 76, 107, 93, 41, 11, 85, 128, 59, 62, 94, 13, 50, 49];

var EP_64 = [
    64, 1, 2, 3, 4, 5, 
    4, 5, 6, 7, 8, 9, 
    8, 9, 10, 11, 12, 13, 
    12, 13, 14, 15, 16, 17, 
    16, 17, 18, 19, 20, 21, 
    20, 21, 22, 23, 24, 25, 
    24, 25, 26, 27, 28, 29, 
    28, 29, 30, 31, 32, 33,
    32, 33, 34, 35, 36, 37,
    36, 37, 38, 39, 40, 41,
    40, 41, 42, 43, 44, 45,
    44, 45, 46, 47, 48, 49,
    48, 49, 50, 51, 52, 53,
    52, 53, 54, 55, 56, 57,
    56, 57, 58, 59, 60, 61,
    60, 61, 62, 63, 64, 1
];

var sBoxes_64 = [
    [   [14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],  
        [0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],  
        [4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],  
        [15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13] ],

    [   [15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10] , 
        [3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],  
        [0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],  
        [13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9] ],

    [   [10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],  
        [13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],  
        [13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],  
        [1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12] ],

    [   [7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],  
        [13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],  
        [10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],  
        [3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14] ],

    [   [2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],  
        [14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],  
        [4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],  
        [11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3] ],

    [   [12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],  
        [10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],  
        [9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],  
        [4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13] ],

    [   [4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1] , 
        [13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],  
        [1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],  
        [6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12] ],

    [   [13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],  
        [1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],  
        [7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],  
        [2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11] ],

        [   [14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],  
        [0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],  
        [4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],  
        [15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13] ],

    [   [15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10] , 
        [3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],  
        [0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],  
        [13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9] ],

    [   [10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],  
        [13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],  
        [13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],  
        [1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12] ],

    [   [7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],  
        [13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],  
        [10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],  
        [3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14] ],

    [   [2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],  
        [14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],  
        [4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],  
        [11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3] ],

    [   [12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],  
        [10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],  
        [9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],  
        [4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13] ],

    [   [4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1] , 
        [13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],  
        [1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],  
        [6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12] ],

    [   [13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],  
        [1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],  
        [7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],  
        [2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11] ]
];

var P_64 = [ 11, 19, 7, 6, 60, 5, 3, 22, 61, 8, 15, 2, 27, 63, 17, 41, 29, 50, 24, 39, 28, 53, 21, 40, 36, 1, 32, 51, 48, 47, 18, 46, 31, 43, 37, 33, 49, 58, 35, 26, 62, 14, 64, 23, 10, 4, 54, 38, 44, 16, 56, 59, 25, 20, 13, 9, 55, 45, 42, 57, 30, 52, 12, 34];

//-------------------------------------------------------------------
var pc1 = new Map();
pc1.set('32', pc1_32);
pc1.set('16', pc1_16);
pc1.set('64', pc1_64);

var pc2 = new Map();
pc2.set('32', pc2_32);
pc2.set('16', pc2_16);
pc2.set('64', pc2_64);

var IP = new Map();
IP.set('32',IP_32);
IP.set('16',IP_16);
IP.set('64',IP_64);

var invIP = new Map();
invIP.set('32',invIP_32);
invIP.set('16',invIP_16);
invIP.set('64',invIP_64);

var EP = new Map();
EP.set('32',EP_32);
EP.set('16',EP_16);
EP.set('64',EP_64);

var P = new Map();
P.set('32',P_32);
P.set('16',P_16);
P.set('64',P_64);

var sBoxes = new Map();
sBoxes.set('32', sBoxes_32);
sBoxes.set('16', sBoxes_16);
sBoxes.set('64', sBoxes_64);

var N = 16;
var padding = 0;
var rounds = [];
var leftShift= [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
var IV = '0000000000000000';

// function ascii2hex(str){
//     var hex = "";

//     for(var i=0; i<str.length; i++){
//         hex+= (str.charCodeAt(i)).toString(16);
//     }
//     return hex;
// }

function ascii2hex(str)
{
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
}

function hex2ascii(str)
 {
	var ascii = '';
	for (var n = 0; n < str.length; n += 2) {
		ascii += String.fromCharCode(parseInt(str.substr(n, 2), 16));
	}
	return ascii;
}

module.exports = {
    N: N,
    padding: padding,
    rounds: rounds,
    IV: IV,
    leftShift: leftShift,
    pc1: pc1,
    pc2: pc2,
    IP: IP,
    invIP: invIP,
    EP: EP,
    P: P,
    sBoxes: sBoxes,
    ascii2hex: ascii2hex,
    hex2ascii: hex2ascii
};
