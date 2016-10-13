function ago(string) {
      var date = new Date(Date.parse(string));
      var now = new Date();
      var diff = Math.floor((now - date) / 1000);
      if (diff <= 1) {return "0с";}
      if (diff < 20) {return diff + "с";}
      if (diff < 40) {return "1м";}
      if (diff < 60) {return "1м";}
      if (diff <= 90) {return "1м";}
      if (diff <= 3540) {return Math.round(diff / 60) + "м";}
      if (diff <= 5400) {return "1ч";}
      if (diff <= 86400) {return Math.round(diff / 3600) + "ч";}
      if (diff <= 129600) {return "1д";}
      if (diff < 604800) {return Math.round(diff / 86400) + "д";}
      if (diff <= 777600) {return "1н";}
      return date;
}