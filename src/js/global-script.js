$(document).ready(function() {
  /*
   * Static properties and methods
   */
  /**
   * Article constructor. Count total sum of articles. Save data
   * last created article. Use static properties and methods
   * @returns {global-scriptL#1.Article}
   */
  function Article() {
    this.created = new Date();

    Article.count++; // increase count every time
    Article.last = this.created; // and save date
  }

  Article.count = 0; // start value
  // we can`t leave 'undundefined' cause ArArticle.count++ will be NaN

  Article.showStats = function() {
    alert('Total: ' + this.count + ', Last: ' +
        this.last);
  };

  new Article();
  new Article();

  Article.showStats(); // Total 2, Last: (date)

  new Article();

  Article.showStats(); // Total 3, Last: (date)

});