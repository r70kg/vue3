import {createRouter, createWebHistory} from 'vue-router'

/**组件自动注册
 * 路由自动化注册
 * @param app app实例
 * @returns {*}
 */
const auto = (app) => {
  const requireComponent = require.context('@/modules', true, /\.vue$/) // 找到 modules 路径下的所有文件
  const dynamic_route = requireComponent.keys().filter(fileName => {
    if (fileName === './index.vue') // 过滤掉父节点的路由
      return false
    else
      return true
  }).map(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = fileName.replace(/^\.\//, '').replace(/\.vue$/, '')// 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
    const componentNameRe = componentName.replace(/\//g, '-') // 设置name为文件夹名-index

    // 注册组件 start
    // 注意:什么时候应用程序组件（…）提供了一个definition对象（第二个参数），它返回应用程序实例（以便允许链接调用）。要获取组件定义，请省略定义对象并仅提供名称
    // https://stackoverflow.com/questions/64409157/vue-js-component-is-missing-template-or-render-function
    app.component(componentNameRe, componentConfig.default)
    console.log(`组件==>\n${componentNameRe}`)
    const Component = app.component(componentNameRe) // 根据路径注册成组件
    // 注册组件 end

    const result = {
      path: `/${componentName}`,
      name: componentNameRe,
      component: Component
    }
    return result
  })

  const routes = dynamic_route
  console.log(`路由==>\n${JSON.stringify(routes)}`)

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  return router
}

export default auto;


