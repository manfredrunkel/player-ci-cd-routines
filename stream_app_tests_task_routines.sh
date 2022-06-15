echo "Running Player Web Tests"
export BROWSERSTACK_USERNAME=user
export BROWSERSTACK_ACCESS_KEY=pass
export BASE_URL="https://URL/URL"
npm install
npx wdio run wdio_browserstack.conf.js  
