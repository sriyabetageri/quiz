class Quiz{
    constructor() {
        this.input = createInput("My Quiz");

        this.Q = createInput("Question: which word is spelled incorrectly?")
        this.A1 = createInput("1:Everyone");
        this.A2 = createInput("2:Evveryone");
        this.A3 = createInput("3:Evryone");
        this.A4 = createInput("4:Everyon");
        
}

display(){
    this.input.html("MyQuiz");
    this.input.position(350,0);

    this.Q.html("Question: which word is spelled incorrectly?");
    this.Q.position(150,80);

    this.A1.html("1:Everyone");
    this.A1.position(150,100);

    this.A2.html("2:Evveryone");
    this.A2.position(150,120);


    this.A3.html("3:Evryone");
    this.A3.position(150,140);

    this.A4.html("4:Everyon");
    this.A4.position(150,160);

}
}