const { LigaturesAddon } = require('xterm-addon-ligatures');

exports.decorateTerm = (Term, { React,  notify }) => {
  return class extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.onDecorated = this.onDecorated.bind(this);
      this.ligaturesAddon = new LigaturesAddon();
    }

    onDecorated(term) {
      if (!term) {
        return;
      }

      if (this.props.onDecorated) {
        this.props.onDecorated(term);
      }

      if (term.term) {
        term.term.loadAddon(this.ligaturesAddon)
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
