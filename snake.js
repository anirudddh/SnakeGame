function Snake() {
    this.x = 10;
    this.y = 10;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.brick = [];
    this.score = 0;
    this.level = 1;
    this.level1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,/*Strip One*/
                    30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480,510,540,570,600,630,660,690,720,750,780,810,840,870,/*Strip two*/
                    29,59,89,119,149,179,209,239,269,299,329,359,389,419,449,479,509,539,569,599,629,659,689,719,749,779,809,839,869,899,/*Strip three*/
                    870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898/*Strip four*/];

    this.level2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,/*Strip One*/
        30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480,510,540,570,600,630,660,690,720,750,780,810,840,870,/*Strip two*/
        29,59,89,119,149,179,209,239,269,299,329,359,389,419,449,479,509,539,569,599,629,659,689,719,749,779,809,839,869,899,/*Strip three*/
        870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,/*Strip four*/
        165,195,225,255,285,315,345,375,405,435,436,437,438,439,440,441,442,443,444,445,/*Part 1*/
        464,494,524,554,584,614,644,674,704,734,463,462,461,460,459,458,457,456,455,454/*Part2*/];

   this.level3 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,/*Strip One*/
       30,60,90,120,150,180,210,240,270,300,600,630,660,690,720,750,780,810,840,870,/*Strip two*/
       29,59,89,119,149,179,209,239,269,299,599,629,659,689,719,749,779,809,839,869,899,/*Strip three*/
       870,871,872,873,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,/*Strip four*/
       155,156,157,158,159,160,161,162,168,169,170,171,172,173,174,/*Strip five*/
       725,726,727,728,729,730,731,732,738,739,740,741,742,743,744,/*Strip six*/
       185,215,245,275,305,335,365,395,425,455,485,515,545,575,605,635,665,695,/*Strip seven*/
       204,234,264,294,324,354,384,414,444,474,504,534,564,594,624,654,684,714/*Strip eight*/
   ];
   this.level4 = [
       0,1,2,3,4,5,6,7,8,9,20,21,22,23,24,25,26,27,28,29,/*Strip One*/
       870,871,872,873,874,875,876,877,878,879,880,890,891,892,893,894,895,896,897,898,/*Strip four*/
       30,60,90,120,150,180,210,240,270,300,600,630,660,690,720,750,780,810,840,/*Strip two*/
       59,89,119,149,179,209,239,269,299,329,599,629,659,689,719,749,779,809,839,869,899,/*Strip three*/
       160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,/*Strip five*/
       155,185,215,245,275,305,335,365,395,425,455,485,515,545,575,/*Strip six*/
       725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,/*Strip seven*/
       324,354,384,414,444,474,504,534,564,594,624,654,684,714,744/*Strip eight*/
   ];
   this.level5andabove = [
       0,1,2,3,4,5,6,7,8,9,20,21,22,23,24,25,26,27,28,29,/*Strip One*/
       870,871,872,873,874,875,876,877,878,879,880,890,891,892,893,894,895,896,897,898,/*Strip four*/
       30,60,90,120,150,180,210,240,270,300,600,630,660,690,720,750,780,810,840,/*Strip two*/
       59,89,119,149,179,209,239,269,299,329,599,629,659,689,719,749,779,809,839,869,899,/*Strip three*/
       160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,/*Strip five*/
       155,185,215,245,275,305,335,365,395,425,455,485,515,545,575,/*Strip six*/
       725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,/*Strip seven*/
       324,354,384,414,444,474,504,534,564,594,624,654,684,714,744,/*Strip eight*/
       310,311,312,313,316,317,318,319,
       340,370,400,430,520,550,580,610,
       611,612,613,616,617,618,619,620,
       320,350,380,410,440,530,560,590
   ];
    this.draw = function () {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(this.x,this.y,scale,scale);
        for(let i=0; i<this.tail.length; i++){
            this.randomColor = Math.floor(Math.random()*1000);
            ctx.fillStyle = "#"+this.randomColor;
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale,scale);
        }
    }

    this.update = function () {
        for(let i = 0; i<this.tail.length -1; i++){
            this.tail[i] = this.tail[i+1];
        }
        for(var p = 0; p<30;p++) for(var q = 0;q<30;q++){
            this.brick.push({
                x:p , y:q
            })
        }
        if(this.level === 1){
            for(var i in this.level1){
             ctx.fillStyle = "#8B4513";
             ctx.fillRect(this.brick[this.level1[i]].x*10, this.brick[this.level1[i]].y*10, scale,scale);
            }
        }
        else if(this.level === 2){
            for(var i in this.level2){
                ctx.fillStyle = "#8B4513";
                ctx.fillRect(this.brick[this.level2[i]].x*10, this.brick[this.level2[i]].y*10, scale,scale);
            }
        }
        else if(this.level === 3) {
            for(var i in this.level3){
                ctx.fillStyle = "#8B4513";
                ctx.fillRect(this.brick[this.level3[i]].x*10, this.brick[this.level3[i]].y*10, scale,scale);
            }
        }
        else if(this.level === 4){
            for(var i in this.level4){
                ctx.fillStyle = "#8B4513";
                ctx.fillRect(this.brick[this.level4[i]].x*10, this.brick[this.level4[i]].y*10, scale,scale);
            }
        }
        else{
            for(var i in this.level5andabove){
                ctx.fillStyle = "#8B4513";
                ctx.fillRect(this.brick[this.level5andabove[i]].x*10, this.brick[this.level5andabove[i]].y*10, scale,scale);
            }
        }

        this.tail[this.total - 1] =  {x: this.x, y: this.y};


        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > 300){
            this.x = 0;
        }
        if(this.y > 300){
            this.y = 0;
        }
        if(this.x < 0){
            this.x = 300;
        }
        if(this.y < 0){
            this.y = 300;
        }

    }

    this.changeDirection = function (direction) {
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale;
                document.getElementById("3").src = 'long-arrow-left.png';
                document.getElementById("1").src = 'arrow-left.png';
                document.getElementById("2").src = 'arrow-left.png';
                document.getElementById("4").src = 'arrow-left.png';
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale;
                document.getElementById("4").src = 'long-arrow-left.png';
                document.getElementById("1").src = 'arrow-left.png';
                document.getElementById("2").src = 'arrow-left.png';
                document.getElementById("3").src = 'arrow-left.png';
                break;
            case 'Left':
                this.xSpeed = -scale;
                this.ySpeed = 0;
                document.getElementById("1").src = 'long-arrow-left.png';
                document.getElementById("2").src = 'arrow-left.png';
                document.getElementById("3").src = 'arrow-left.png';
                document.getElementById("4").src = 'arrow-left.png';
                break;
            case 'Right':
                this.xSpeed = scale;
                this.ySpeed = 0;
                document.getElementById("2").src = 'long-arrow-left.png';
                document.getElementById("1").src = 'arrow-left.png';
                document.getElementById("3").src = 'arrow-left.png';
                document.getElementById("4").src = 'arrow-left.png';
                break;
        }
    }
    this.eat = function (fruit) {
        if (this.x === fruit.x && this.y === fruit.y){
            this.total++;
            this.score++;
            if((this.score%3)===0){
                this.level++;
            }
            return true;
        }
        return false;
    }

    this.checkCollision = function () {
        for (var i = 0; i<this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                return true;
            }
        }
        if(this.level === 1){
            for(var i in this.level1){
                if(this.x === this.brick[this.level1[i]].x*10 && this.y === this.brick[this.level1[i]].y*10){
                    return true;
                }
            }
        }
        else if(this.level === 2){
            for(var i in this.level2){
                if(this.x === this.brick[this.level2[i]].x*10 && this.y === this.brick[this.level2[i]].y*10){
                    return true;
                }
            }
        }
        else if(this.level === 3) {
            for(var i in this.level3){
                if(this.x === this.brick[this.level3[i]].x*10 && this.y === this.brick[this.level3[i]].y*10){
                    return true;
                }
            }
        }
        else if(this.level === 4){
            for(var i in this.level4){
                if(this.x === this.brick[this.level4[i]].x*10 && this.y === this.brick[this.level4[i]].y*10){

                    return true;
                }
            }
        }
        else
        {
            for(var i in this.level5andabove){
                if(this.x === this.brick[this.level5andabove[i]].x*10 && this.y === this.brick[this.level5andabove[i]].y*10){
                    return true;
                }
            }
        }
    }
}
function Fruit() {
    this.brick = [];
    for(var p = 0; p<30;p++) for(var q = 0;q<30;q++){
        this.brick.push({
            x:p , y:q
        });
        this.fruitpositionX =[1,2,3,4,6,7,8,9,10,11,12,13,16,17,18,19,20,21,22,23,25,26,27,28];
        this.fruitpositionY =[1,2,3,4,6,7,8,9,10,11,12,13,16,17,18,19,20,21,22,23,25,26,27,28];
    this.x;
    this.y;
     this.picklocation = function() {
         this.x = this.fruitpositionX[Math.round(Math.random() * this.fruitpositionX.length)] * scale;
         this.y = this.fruitpositionY[Math.round(Math.random()* this.fruitpositionY.length)] * scale;
     };
     this.draw = function () {
         ctx.fillStyle = "#f00";
         ctx.fillRect(this.x,this.y,scale,scale);
     }
    }
}