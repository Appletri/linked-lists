function Node() {
  return {
    value: null,
    nextNode: null,
    changeValue(newValue) {
      this.value = newValue
    }
  }
}

export default Node;