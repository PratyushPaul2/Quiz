class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
   
    

    //write code to show a heading for showing the result of Quiz

 // getContestnatInfo();


    if(allContestants!==undefined){
     var displayAnswers=230;
    
    

    text("NOTE: Contestants who gave the right answer are highlighted in green!",130,120);

   for(var plr in allContestants){
     var correctAns=2;
     if(correctAns=allContestants[plr].answer){
       fill("greens");
       
     } else{
       fill("red");
     }
     displayAnswers+=30;
   }
  }
    
  }

}
