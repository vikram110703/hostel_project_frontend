import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    target:"esnext",
  },
})

// export default {
//   // ... other Vite config options ...

//   build: {
//       target: 'esnext', // Ensure target is set to 'esnext'
//       // ... other build options ...
//   },
// };
// After making these changes, your code should work correctly with useHistory from 'react-router-dom' in your Vite-based project. If you continue to encounter issues, please double-check your Vite and project configuration for any possible conflicts or errors.






