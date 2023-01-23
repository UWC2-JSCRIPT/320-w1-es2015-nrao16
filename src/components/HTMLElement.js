// Define class here

class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    const element = `<${this.tag}>${this.content}</${this.tag}>`;
    return element;
  }
}
// Export class here
export default HTMLElement;
