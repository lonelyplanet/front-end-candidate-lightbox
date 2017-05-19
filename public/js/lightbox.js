(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lightbox = function (_React$Component) {
  _inherits(Lightbox, _React$Component);

  function Lightbox(props) {
    _classCallCheck(this, Lightbox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Lightbox).call(this, props));

    _this.state = {
      display: 'none'
    };
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  _createClass(Lightbox, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.openbtn || this.showLightbox({ keyboard: true });
      window.addEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {
      this.props.openbtn;
      window.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "showLightbox",
    value: function showLightbox() {
      this.setState({ display: 'block' });
      document.body.classList.add('lightbox-open');
    }
  }, {
    key: "hideLightbox",
    value: function hideLightbox() {
      this.setState({ display: 'none' });
      document.body.classList.remove('lightbox-open');
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      if (e.keyCode == 27) {
        this.hideLightbox();
      }
    }
  }, {
    key: "closeOnBackground",
    value: function closeOnBackground(e) {
      if (e.target.className == 'lightbox') {
        this.hideLightbox();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var button;
      if (this.props.openbtn) {
        var button = React.createElement(
          "button",
          { className: "lightbox-open-btn", onClick: function onClick(e) {
              return _this2.showLightbox(e);
            } },
          this.props.opentext || 'Open Lightbox'
        );
      }
      return React.createElement(
        "span",
        null,
        button,
        React.createElement(
          "div",
          { className: "lightbox", style: this.state, onClick: function onClick(e) {
              return _this2.closeOnBackground(e);
            } },
          React.createElement("span", { className: "lightbox-close", onClick: function onClick(e) {
              return _this2.hideLightbox(e);
            } }),
          this.props.content
        )
      );
    }
  }]);

  return Lightbox;
}(React.Component);

var democontent = React.createElement(
  "div",
  { className: "content" },
  React.createElement(
    "h1",
    null,
    "Lightbox Demo using React"
  ),
  React.createElement(
    "p",
    null,
    "I wanted to demonstrate to your team that I have a passion for learning new things. In my interview we talked about how your team was rebuilding parts of the site in React. We discussed how I hadn't done much yet because I work with other backend developers who take more lead on the JS front. However, I wanted to show you that I am up for the challenge and I want to grow and expand my JS knowledge."
  ),
  React.createElement(
    "p",
    null,
    "Main Tools Used"
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "React"
    ),
    React.createElement(
      "li",
      null,
      "Babelify"
    ),
    React.createElement(
      "li",
      null,
      "Gulp"
    ),
    React.createElement(
      "li",
      null,
      "Autoprefixer"
    ),
    React.createElement(
      "li",
      null,
      "Nunjucks"
    ),
    React.createElement(
      "li",
      null,
      "SASS"
    )
  ),
  React.createElement(
    "p",
    null,
    "Thank you so much for your time and I hope you like what you see. I would be honored to be apart of your team and look forward to hearing from you."
  )
);

React.render(React.createElement(Lightbox, { openbtn: true, opentext: "Open Lightbox", content: democontent }), document.getElementById('js-lightbox-opener'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbGlnaHRib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sUTs7O0FBQ0osb0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDRGQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsZUFBUztBQURFLEtBQWI7QUFHQSxVQUFLLGFBQUwsR0FBcUIsTUFBSyxhQUFMLENBQW1CLElBQW5CLE9BQXJCO0FBTGlCO0FBTWxCOzs7O3lDQUVvQjtBQUNwQixXQUFLLEtBQUwsQ0FBVyxPQUFYLElBQXNCLEtBQUssWUFBTCxDQUFrQixFQUFDLFVBQVUsSUFBWCxFQUFsQixDQUF0QjtBQUNDLGFBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsS0FBSyxhQUF4QztBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUssS0FBTCxDQUFXLE9BQVg7QUFDQSxhQUFPLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDLEtBQUssYUFBM0M7QUFDRDs7O21DQUVjO0FBQ2IsV0FBSyxRQUFMLENBQWMsRUFBRSxTQUFTLE9BQVgsRUFBZDtBQUNBLGVBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsZUFBNUI7QUFDRDs7O21DQUVjO0FBQ2IsV0FBSyxRQUFMLENBQWMsRUFBRSxTQUFTLE1BQVgsRUFBZDtBQUNBLGVBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsZUFBL0I7QUFDRDs7O2tDQUVhLEMsRUFBRztBQUNmLFVBQUksRUFBRSxPQUFGLElBQWEsRUFBakIsRUFBcUI7QUFDbkIsYUFBSyxZQUFMO0FBQ0Q7QUFDRjs7O3NDQUVpQixDLEVBQUc7QUFDbkIsVUFBSSxFQUFFLE1BQUYsQ0FBUyxTQUFULElBQXNCLFVBQTFCLEVBQXNDO0FBQ3BDLGFBQUssWUFBTDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNWLFVBQUksTUFBSjtBQUNBLFVBQUksS0FBSyxLQUFMLENBQVcsT0FBZixFQUF3QjtBQUNyQixZQUFJLFNBQVM7QUFBQTtVQUFBLEVBQVEsV0FBVSxtQkFBbEIsRUFBc0MsU0FBUyxpQkFBQyxDQUFEO0FBQUEscUJBQU8sT0FBSyxZQUFMLENBQWtCLENBQWxCLENBQVA7QUFBQSxhQUEvQztVQUE2RSxLQUFLLEtBQUwsQ0FBVyxRQUFYLElBQXVCO0FBQXBHLFNBQWI7QUFDQztBQUNELGFBQ0U7QUFBQTtRQUFBO1FBQ0MsTUFERDtRQUVFO0FBQUE7VUFBQSxFQUFLLFdBQVUsVUFBZixFQUEwQixPQUFPLEtBQUssS0FBdEMsRUFBNkMsU0FBUyxpQkFBQyxDQUFEO0FBQUEscUJBQU8sT0FBSyxpQkFBTCxDQUF1QixDQUF2QixDQUFQO0FBQUEsYUFBdEQ7VUFDRSw4QkFBTSxXQUFVLGdCQUFoQixFQUFpQyxTQUFTLGlCQUFDLENBQUQ7QUFBQSxxQkFBTyxPQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FBUDtBQUFBLGFBQTFDLEdBREY7VUFFQSxLQUFLLEtBQUwsQ0FBVztBQUZYO0FBRkYsT0FERjtBQVNEOzs7O0VBdkRvQixNQUFNLFM7O0FBMEQ3QixJQUFJLGNBQWM7QUFBQTtFQUFBLEVBQUssV0FBVSxTQUFmO0VBQXlCO0FBQUE7SUFBQTtJQUFBO0FBQUEsR0FBekI7RUFBMkQ7QUFBQTtJQUFBO0lBQUE7QUFBQSxHQUEzRDtFQUFtZDtBQUFBO0lBQUE7SUFBQTtBQUFBLEdBQW5kO0VBQXllO0FBQUE7SUFBQTtJQUFJO0FBQUE7TUFBQTtNQUFBO0FBQUEsS0FBSjtJQUFrQjtBQUFBO01BQUE7TUFBQTtBQUFBLEtBQWxCO0lBQW1DO0FBQUE7TUFBQTtNQUFBO0FBQUEsS0FBbkM7SUFBZ0Q7QUFBQTtNQUFBO01BQUE7QUFBQSxLQUFoRDtJQUFxRTtBQUFBO01BQUE7TUFBQTtBQUFBLEtBQXJFO0lBQXNGO0FBQUE7TUFBQTtNQUFBO0FBQUE7QUFBdEYsR0FBemU7RUFBaWxCO0FBQUE7SUFBQTtJQUFBO0FBQUE7QUFBamxCLENBQWxCOztBQUVBLE1BQU0sTUFBTixDQUFhLG9CQUFDLFFBQUQsSUFBVSxTQUFTLElBQW5CLEVBQXlCLFVBQVMsZUFBbEMsRUFBa0QsU0FBUyxXQUEzRCxHQUFiLEVBQXlGLFNBQVMsY0FBVCxDQUF3QixvQkFBeEIsQ0FBekYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgTGlnaHRib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IHRoaXMuaGFuZGxlS2V5RG93bi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXHQgIHRoaXMucHJvcHMub3BlbmJ0biB8fCB0aGlzLnNob3dMaWdodGJveCh7a2V5Ym9hcmQ6IHRydWV9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbk1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub3BlbmJ0bjtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgfVxuXG4gIHNob3dMaWdodGJveCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Ym94LW9wZW4nKTtcbiAgfVxuXG4gIGhpZGVMaWdodGJveCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheTogJ25vbmUnIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHRib3gtb3BlbicpO1xuICB9XG5cbiAgaGFuZGxlS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAyNykge1xuICAgICAgdGhpcy5oaWRlTGlnaHRib3goKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU9uQmFja2dyb3VuZChlKSB7XG4gICAgaWYoIGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnbGlnaHRib3gnKSB7XG4gICAgICB0aGlzLmhpZGVMaWdodGJveCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcblx0dmFyIGJ1dHRvbjtcblx0aWYgKHRoaXMucHJvcHMub3BlbmJ0bikgeyBcbiAgICB2YXIgYnV0dG9uID0gPGJ1dHRvbiBjbGFzc05hbWU9J2xpZ2h0Ym94LW9wZW4tYnRuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zaG93TGlnaHRib3goZSl9Pnt0aGlzLnByb3BzLm9wZW50ZXh0IHx8ICdPcGVuIExpZ2h0Ym94J308L2J1dHRvbj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj5cblx0XHQgICAge2J1dHRvbn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodGJveFwiIHN0eWxlPXt0aGlzLnN0YXRlfSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbG9zZU9uQmFja2dyb3VuZChlKX0gPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpZ2h0Ym94LWNsb3NlXCIgb25DbGljaz17KGUpID0+IHRoaXMuaGlkZUxpZ2h0Ym94KGUpfT48L3NwYW4+XG5cdFx0XHQgICAge3RoaXMucHJvcHMuY29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG52YXIgZGVtb2NvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+PGgxPkxpZ2h0Ym94IERlbW8gdXNpbmcgUmVhY3Q8L2gxPjxwPkkgd2FudGVkIHRvIGRlbW9uc3RyYXRlIHRvIHlvdXIgdGVhbSB0aGF0IEkgaGF2ZSBhIHBhc3Npb24gZm9yIGxlYXJuaW5nIG5ldyB0aGluZ3MuIEluIG15IGludGVydmlldyB3ZSB0YWxrZWQgYWJvdXQgaG93IHlvdXIgdGVhbSB3YXMgcmVidWlsZGluZyBwYXJ0cyBvZiB0aGUgc2l0ZSBpbiBSZWFjdC4gV2UgZGlzY3Vzc2VkIGhvdyBJIGhhZG4ndCBkb25lIG11Y2ggeWV0IGJlY2F1c2UgSSB3b3JrIHdpdGggb3RoZXIgYmFja2VuZCBkZXZlbG9wZXJzIHdobyB0YWtlIG1vcmUgbGVhZCBvbiB0aGUgSlMgZnJvbnQuIEhvd2V2ZXIsIEkgd2FudGVkIHRvIHNob3cgeW91IHRoYXQgSSBhbSB1cCBmb3IgdGhlIGNoYWxsZW5nZSBhbmQgSSB3YW50IHRvIGdyb3cgYW5kIGV4cGFuZCBteSBKUyBrbm93bGVkZ2UuPC9wPjxwPk1haW4gVG9vbHMgVXNlZDwvcD48dWw+PGxpPlJlYWN0PC9saT48bGk+QmFiZWxpZnk8L2xpPjxsaT5HdWxwPC9saT48bGk+QXV0b3ByZWZpeGVyPC9saT48bGk+TnVuanVja3M8L2xpPjxsaT5TQVNTPC9saT48L3VsPjxwPlRoYW5rIHlvdSBzbyBtdWNoIGZvciB5b3VyIHRpbWUgYW5kIEkgaG9wZSB5b3UgbGlrZSB3aGF0IHlvdSBzZWUuIEkgd291bGQgYmUgaG9ub3JlZCB0byBiZSBhcGFydCBvZiB5b3VyIHRlYW0gYW5kIGxvb2sgZm9yd2FyZCB0byBoZWFyaW5nIGZyb20geW91LjwvcD48L2Rpdj47XG5cblJlYWN0LnJlbmRlcig8TGlnaHRib3ggb3BlbmJ0bj17dHJ1ZX0gb3BlbnRleHQ9XCJPcGVuIExpZ2h0Ym94XCIgY29udGVudD17ZGVtb2NvbnRlbnR9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbGlnaHRib3gtb3BlbmVyJykpOyJdfQ==
