const ligatures = require('xterm-addon-ligatures');

exports.decorateTerm = (Term, { React,  notify }) => {
  return class extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.onDecorated = this.onDecorated.bind(this);
    }

    onDecorated(term) {
      if (!term) {
        return;
      }

      if (this.props.onDecorated) {
        this.props.onDecorated(term);
      }

      if (term.term) {
        ligatures.enableLigatures(term.term);
      }
    }

    render() {
      return React.createElement(Term,
        Object.assign(
          {},
          this.props,
          { onDecorated: this.onDecorated }
        )
      );
    }
  };
};
