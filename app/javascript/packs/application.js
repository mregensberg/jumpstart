// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("local-time").start()

window.Rails = Rails

import 'bootstrap'
import 'data-confirm-modal'
import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Foo from '../foo.vue'
import Bar from '../bar.vue'

$(document).on("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})

Vue.use(TurbolinksAdapter)
Vue.component('foo', Foo)
Vue.component('bar', Bar)

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '[data-behaviour="vue"]',
  })
})