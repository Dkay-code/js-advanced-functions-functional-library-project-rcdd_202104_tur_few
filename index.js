const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
      for (const element of newCollection) {
        alert(element);
       }
       return collection;

     },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
