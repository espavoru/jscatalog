$(document).ready(function() {
  var hotelSeagulf = new Hotel({
    name: 'Seagulf',
    roomRate: 240,
    discount: 35,
    daysToExpire: 6
  });

  var main = document.querySelector('main');
  hotelSeagulf.getElem().classList.add('hotel--seaGulf');
  main.insertBefore(hotelSeagulf.getElem(), null);


  var hotelJane = new Hotel({
    name: 'Jane',
    roomRate: 150,
    discount: 20,
    daysToExpire: 10
  });

  hotelJane.getElem().classList.add('hotel--jane');
  main.appendChild(hotelJane.getElem());

  /**
   *
   * @param {type} options
   * @returns {undefined}
   */
  function Hotel(options) {
    var elem;

    function getElem() {
      !elem ? render() : null;
      return elem;
    }

    function render() {
      elem = document.createElement('div');
      elem.className = 'hotel';
      elem.insertBefore(hotelName(), null);
      elem.insertBefore(roomRate(), null);
      elem.insertBefore(specialRate(), null);
      elem.insertBefore(promo(), null);
    }

    function hotelName() {
      var hotelName = document.createElement('div');
      hotelName.className = 'hotel__name';
      hotelName.textContent = options.name;
      return hotelName;
    }

    function roomRate() {
      var roomRate = document.createElement('div');
      roomRate.className = 'hotel__roomRate';
      roomRate.textContent = options.roomRate.toFixed(2) + ' USD';
      return roomRate;
    }

    function specialRate() {
      var specialRate = document.createElement('div');
      specialRate.className = 'hotel__specialRate';
      specialRate.textContent = offerPrice() + ' USD';
      return specialRate;
    }

    function offerPrice() {
      var offerRate = options.roomRate * ((100 - options.discount)) / 100;
      return offerRate;
    }

    function offerExpires(today) {
      var expiryMsg, weekFromToday, day, date, month, year, dayNames, monthNames;
      /* 7 days in ms */
      weekFromToday = new Date(today.getTime() +
          options.daysToExpire * 24 * 60 * 60 * 1000);
      dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday'];
      monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];
      day = dayNames[weekFromToday.getDay()];
      date = weekFromToday.getDate();
      month = monthNames[weekFromToday.getMonth()];
      year = weekFromToday.getFullYear();

      expiryMsg = 'Promotion ends at ';
      expiryMsg += day + '</br>(' + date + ' ' + month + ' ' +
          year + ')';
      return expiryMsg;
    }

    function promo() {
      var today = new Date();
      var elEnds = document.createElement('div');
      elEnds.className = 'hotel__promo';
      elEnds.innerHTML = offerExpires(today);
      return elEnds;
    }

    this.getElem = getElem;
  }
});