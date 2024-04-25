// question 1


class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }
  }
  let benz = new Car("Benz", "Mercedes", 2022, true);
  console.log(benz.isAvailable);
 benz.toggleAvailability();
  console.log(benz.isAvailable);
  
  
  
  
//   question 2(1)


  class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
    calculateRentalDuration() {
      const durationInMs = this.rentalEndDate - this.rentalStartDate;
      const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24));
      return durationInDays;
    }
  }
  const toyota= new Car("Toyota", "Camry", 2020, true);
  const toyotaRental = new Rental(toyota, "Bazi", new Date("2024-04-25"), new Date("2024-05-01"));
  console.log(toyotaRental.calculateRentalDuration());
  
  
  
//   question 3(1)


  const car = new Car("Benz", "Mercedes", 2022, true);
  console.log({car});
  const rentalCar = new Rental(car, "Bazi", new Date("2024-06-1"), new Date("2024-06-6"));
  const rentalDuration = rentalCar.calculateRentalDuration();
  console.log(rentalDuration);
  



//   Question 2

class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
   putQuestion(question) {
      this.questions.push(question);
    }
    anotherQuestion() {
      this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
    }
  }
const question1 = new Questions("Where are you from?", ["Rwanda", "Burundi", "Kenya", "ganda"], "Rwanda");
const question2 = new Question("What is your favorite meal in Rwanda?", ["Isombe", "Agatogo", "Amashaza", "ibirayi"], "Isombe");
const question3 = new Question("What do you miss alot in your country", ["Family", "Friends", "Church"], "Family")
const myQuiz = new Quiz();
myQuiz.putQuestion(question1);
myQuiz.putQuestion(question2);
myQuiz.submit("Rwanda");
myQuiz.submit("Isombe");
myQuiz.another();
myQuiz.submit("Family");
console.log(`Your final score is: ${myQuiz.score}`);
