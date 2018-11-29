var $$exam = new Vue({
  el: "#exam",

  data: function() {
    return {
      selectedQuestion: null
    }
  },

  methods: {
    selectQuestion (questionID) {
      this.selectedQuestion = questionID;
    },

    attemptAnswer (answer) {
      if (answer.correct) {
        alert('Answer was correct!');
      } else {
        alert('Anwer was wrong');
      }
    }
  },

  computed: {
    ExamAnswers () {
      return $$answersConfig[this.selectedQuestion] && $$answersConfig[this.selectedQuestion]
    }
  }

});