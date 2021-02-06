class Quiz {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val()
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState : state
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
        question = new Question();
        question.display();
      }
    
    }

    play(){
      background("Yellow");
      fill(0);
      textSize(30);
      text("Result of the Quiz",40, 450);
     
  
  
      Contestant.getContestantInfo();
     
      if(allContestants !== undefined){
        fill("Blue");
        textSize(20);
        text("*NOTE: Contestant who answered correct are highlighted in green color!",130,490);
  
        for(var plr in allContestants){
          debugger;
          var correctAns = "3";
          if (correctAns === allContestants[plr].answer)
            fill("Green")
          else
            fill("red");
  
            this.button.mousePressed(()=>{
              this.title.hide();
              this.input1.hide();
              this.button.hide();
              contestant.name = this.input1.value();
              contestantCount+=1;
              contestant.index = contestantCount;
              contestant.update();
              contestant.updateCount(contestantCount);
            });
          }
        }
      }
    }
  
  