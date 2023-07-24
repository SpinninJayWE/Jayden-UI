import { App, createApp } from 'vue'
import Loading from './index.vue'
import { LoadingOptions } from './index.vue'

// Initialize variables to be used later
let app: App<Element> | null = null
let vm: any = null
let loadingCount = 0
let clearTimeOut: any = null

// Define LoadingService function
const LoadingService = (options: LoadingOptions) => {
	app = createApp(Loading, options as any)
	openLoading(options)
}

// Add open function to LoadingService
LoadingService.open = (
	options: LoadingOptions = { loadingText: 'Loading' }
) => {
	return LoadingService({ ...options })
}

// Add close function to LoadingService
LoadingService.close = closeLoading

// Function to open loading
function openLoading(options: LoadingOptions) {
	// Clear timeout to prevent previous timeout from executing
	clearTimeout(clearTimeOut)
	if (loadingCount !== 0 && vm) {
		vm.data.text = options.loadingText
	}
	loadingCount++
	if (loadingCount === 1) {
		// Mount loading component if it's the first time
		mountLoading()
	}
}

// Function to mount loading component
function mountLoading() {
	const oFrag = document.createDocumentFragment()
	vm = app?.mount(oFrag)
	document.body.appendChild(oFrag)
	vm.open()
}

// Function to close loading
function closeLoading() {
	if (loadingCount > 0) {
		loadingCount--
	}
	if (loadingCount !== 0 || !vm) return
	// Unmount loading component if there are no more active loaders
	unMountLoading()
}

// Function to unmount loading component
function unMountLoading() {
	vm.close()
	vm = null
	// Delay unmounting the app to allow for transition animations to complete
	clearTimeOut = setTimeout(() => {
		app && app.unmount()
	}, 200)
}

// Export default LoadingService function
export default LoadingService
