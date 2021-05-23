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
    //write code here to hide question elements
    
    //write code to change the background color here
    

    //write code to show a heading for showing the result of Quiz
    this.resultsHeading = createElement('h1');
    this.resultsHeading.html("Result of the Quiz" );
    this.resultsHeading.position(150, 10);
    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined
    
      fill("blue");
      textSize(20);
      text("*NOTE : Contestants who answered Correct are highlighted in green",130,230);
    

    //write code to add a note here

    //write code to highlight contest who answered correctly

    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
        fill("red");
        textSize(10);
        text(allContestants[plr].name + ":"+ allContestants[plr].answer,130,200);
      }else{
        fill("green");
        textSize(10);
        text(allContestants[plr].name + ":"+ allContestants[plr].answer,130,200);
      }
    }
    
  }

}
