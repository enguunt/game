document.addEventListener('DOMContentLoaded',()=>{
	//alert("test");
	let bird = document.querySelector('.bird');
	let gameDisplay = document.querySelector('.game-container');
	let ground = document.querySelector('.ground');
	let birdLeft = 220;
	let birdBottom = 300;
	let gravity = 2;
	let isGameOver=false;
	function startGame(){
		birdBottom = birdBottom - gravity;
		bird.style.left=birdLeft+"px";
		bird.style.bottom=birdBottom+"px";
	}
	 let gameTime = setInterval (startGame, 20);
	 function control(e){
		 if(e.keyCode==32){
			 jump();
		 }
	 }
	 function jump(){
		 if(birdBottom<490){
			 birdBottom +=50;
		 }
		 bird.style.bottom=birdBottom+'px';
	 }
	 document.addEventListener('keydown',control);
	 
 // create block
	function createBlock(){
		block.classList.add('block');
		gameDisplay.appendChild(block);
		let blockLeft=500;
		let blockBottom=Math.random()*100;
		block.style.left=blockLeft+'px';
		block.style.bottom=blockBottom+'px';
		//move block hodolgoh
		function moveBlock(){
			blockLeft -=2;
			block.style.left=blockLeft+'px';
			if(blockLeft==-60){
				clearInterval(blockTime);
				gameDisplay.removeChild(block);
			}
			if(birdBottom==0 || birdLeft==220 && blockLeft > 200 && blockLeft < 260 && birdBottom < blockBottom+145){
				gameOver();
				clearInterval(blockTime);
			}
		}
		let blockTime = setInterval(moveBlock,20);
		if(isGameOver==false){
			setTimeout(createBlock,2000);
		}
		
	}
	
	function gameOver(){
		clearInterval(gameTime);
		document.removeEventListener('keydown',control);
		isGameOver=true;
	}
});