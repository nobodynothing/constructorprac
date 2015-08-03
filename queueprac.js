function Deque() {
var arr = [];
this.push = function(thing) {
  return this.arr.push(thing);
}
this.unshift = function(thing) {
  return this.arr.unshift(thing);
}
this.shift = function() {
  return this.arr.shift();
}
this.pop = function() {
  return this.arr.pop();
}
}

var Queue = (function () {
    function Queue () {
        Deque.call(this);
    }
    var proto = new Deque([]);
    //var proto = Object.create(Deque.prototype);
    Queue.prototype = proto;
    proto.constructor = Queue;

    proto.unshift = undefined;
    proto.pop = undefined;

    return Queue;
})();
