"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Soldier
var Soldier =
/*#__PURE__*/
function () {
  function Soldier(health, strength) {
    _classCallCheck(this, Soldier);

    this.health = health;
    this.strength = strength;
  }

  _createClass(Soldier, [{
    key: "attack",
    value: function attack() {
      return this.strength;
    }
  }, {
    key: "receiveDamage",
    value: function receiveDamage(damage) {
      this.health -= damage;
    }
  }]);

  return Soldier;
}(); // Viking


var Viking =
/*#__PURE__*/
function (_Soldier) {
  _inherits(Viking, _Soldier);

  function Viking(name, health, strength) {
    var _this;

    _classCallCheck(this, Viking);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Viking).call(this, health, strength));
    _this.name = name;
    return _this;
  }

  _createClass(Viking, [{
    key: "receiveDamage",
    value: function receiveDamage(damage) {
      this.health -= damage;

      if (this.health > 0) {
        return "".concat(this.name, " has received ").concat(damage, " points of damage");
      }

      return "".concat(this.name, " has died in act of combat");
    }
  }, {
    key: "battleCry",
    value: function battleCry() {
      return "Odin Owns You All!";
    }
  }]);

  return Viking;
}(Soldier); // Saxon


var Saxon =
/*#__PURE__*/
function (_Soldier2) {
  _inherits(Saxon, _Soldier2);

  function Saxon(health, strength) {
    _classCallCheck(this, Saxon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Saxon).call(this, health, strength));
  }

  _createClass(Saxon, [{
    key: "receiveDamage",
    value: function receiveDamage(damage) {
      this.health -= damage;

      if (this.health > 0) {
        return "A Saxon has received ".concat(damage, " points of damage");
      }

      return "A Saxon has died in combat";
    }
  }]);

  return Saxon;
}(Soldier); // War


var War =
/*#__PURE__*/
function () {
  function War() {
    _classCallCheck(this, War);

    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  _createClass(War, [{
    key: "addViking",
    value: function addViking(Viking) {
      this.vikingArmy.push(Viking);
    }
  }, {
    key: "addSaxon",
    value: function addSaxon(Saxon) {
      this.saxonArmy.push(Saxon);
    }
  }, {
    key: "vikingAttack",
    value: function vikingAttack() {
      numRandom = Math.floor(Math.random() * this.vikingArmy.length);
      receiveDamage();
    }
  }, {
    key: "saxonAttack",
    value: function saxonAttack() {}
  }, {
    key: "showStatus",
    value: function showStatus() {}
  }]);

  return War;
}();