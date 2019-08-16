export default {
  bind(el, binding, vNode) {
    el.$vueClickOutside = (event) => {
      if (!el.contains(event.target)) {
        vNode.context[binding.expression](event);
        event.stopPropagation();
      }
    };
    document.body.addEventListener('click', el.$vueClickOutside);
  },
  unbind(el) {
    document.removeEventListener('click', el.$vueClickOutside);
    el.$vueClickOutside = null;
  },
};
