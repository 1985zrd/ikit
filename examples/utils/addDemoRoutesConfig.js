const deepEachRoutes = (data) => {
  if (Array.isArray(data)) {
    data = data.map(item => deepEachRoutes(item))
  } else {
    data.path = `/example${data.path}`
    data.type = `example`
    if (Array.isArray(data.items)) {
      data.items = deepEachRoutes(data.items)
    }
  }
  return data
}
const addDemoRoutesConfig = navConfig => {
  navConfig = JSON.parse(JSON.stringify(navConfig))
  navConfig['组件'] = deepEachRoutes(JSON.parse(JSON.stringify(navConfig['示例'])))
  return navConfig
}
export {
  addDemoRoutesConfig
}
