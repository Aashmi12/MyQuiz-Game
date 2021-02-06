class Question{
   constructor(){
    this.title = createElement('h1')
    this.input1 = createInput("Name");
    this.input2 = createInput("Enter Correct Option no.");
    this.question = createElement('h3');
    this.button = createButton('Submit');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.question.html("Question:- If there are 2 sheeps, 3 cows and 1 man. How many feets are there in all? " );
    this.question.position(150, 80);
    this.option1.html("1. 21 " );
    this.option1.position(150, 100);
    this.option2.html("2. 22" );
    this.option2.position(150, 120);
    this.option3.html("3. 2 " );
    this.option3.position(150, 140);
    this.option4.html("4. 24" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

  }

  

}
