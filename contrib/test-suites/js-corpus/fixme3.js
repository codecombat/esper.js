function foo() {
    var ParentClass = function () {
        function ParentClass() {
        }
        ParentClass.prototype.f = function () {
            return 'hello world';
        };
        return ParentClass;
    }();
    var MyClass = function () {
        function MyClass() {
            ParentClass.apply(this, arguments);
        }
        MyClass.prototype = Object.create(ParentClass.prototype);
        return MyClass;
    }();
    var x = new MyClass('test');
    console.log(x.f());
}

foo();

