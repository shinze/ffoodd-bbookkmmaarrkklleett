var walker = document.createTreeWalker(document, NodeFilter.SHOW_TEXT,  { acceptNode: function(node) {
      if (node.parentElement.tagName !== 'SCRIPT' && node.parentElement.tagName !== 'STYLE' ) {
        return NodeFilter.FILTER_ACCEPT;
      }
    }}, false);
var node;
while (node = walker.nextNode()) {
  node.textContent = node.textContent.split('').map(function double(char) {
    return char.repeat(2);
  }).join('');
}
