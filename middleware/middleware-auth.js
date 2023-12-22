export default function ({ route, redirect }) {
  // route.name chứa tên của route hiện tại

  if (!localStorage.getItem('logged')) {
    console.log('Dieu huong:',route.name)
    if (route.name.includes('user')|| route.name.includes('product')) {
      return redirect('/')
    }
  }
}