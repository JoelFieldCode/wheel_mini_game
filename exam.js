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
        toastr.success('Correct Answer!');
      } else {
        toastr.error('Wrong Answer.');
      }
    }
  },

  computed: {
    ExamAnswers () {
      return $$answersConfig[this.selectedQuestion] && $$answersConfig[this.selectedQuestion]
    }
  }

});