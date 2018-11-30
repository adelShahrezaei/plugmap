
require('normalize.css/normalize.css');
require('./styles/index.scss');
import Core from './core'
import MyPlugin from './plugin1'



const core = new Core()
core.register([MyPlugin])

core.newMessage("this is a new message")