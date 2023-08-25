<br/>
<p align="center">
  <a href="https://github.com/bengeois/tgtg-client">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Too_Good_To_Go_Logo.svg/1200px-Too_Good_To_Go_Logo.svg.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">tgtg-client</h3>

  <p align="center">
    An unofficial TooGoodToGo API with extensive TypeScript typings !
    <br/>
    <br/>
    <a href="https://github.com/bengeois/tgtg-client"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/bengeois/tgtg-client/issues">Report Bug</a>
    .
    <a href="https://github.com/bengeois/tgtg-client/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/bengeois/tgtg-client/total) ![Contributors](https://img.shields.io/github/contributors/bengeois/tgtg-client?color=dark-green) ![Issues](https://img.shields.io/github/issues/bengeois/tgtg-client) ![License](https://img.shields.io/github/license/bengeois/tgtg-client)

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
  - [Creating A Pull Request](#creating-a-pull-request)
- [License](#license)

## About The Project

Welcome to the TooGoodToGo API Client repository!

This client library allows you to interact with the TooGoodToGo API, enabling you to access and manipulate data from the TooGoodToGo platform. With this library, you can fetch items, get your favorite businesses, and more!

## Getting Started

### Prerequisites

- npm

### Installation

```sh
npm install tgtg-client
```

## Usage

```js
import { TgtgClient } from 'tgtg-client';

// Create a new instance of the TgtgClient
const client = new TgtgClient({
  email: 'your-email@example.com',
});

(async () => {
  try {
    // Request login using email
    const pollingId = await client.requestLoginByEmail();

    // Authenticate using polling ID
    await client.authenticate(pollingId);
    console.log('Authenticated successfully!');

    // Get your favorite businesses
    const favorites = await client.getFavorites();
    console.log('Your favorite businesses:', favorites);

    // Get items with specified filters
    const items = await client.getItems({
      favorites_only: false,
      page_size: 10,
      page: 1,
    });
    console.log('Items:', items);

    // Get your account credentials
    const credentials = client.getCredentials();
    console.log('Credentials:', credentials);

    // Set credentials (e.g., if you want to skip login process)
    client.setCredentials('new-access-token', 'new-refresh-token', 'user-id', 3600);
    console.log('Credentials updated!');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
})();
```

## Roadmap

See the [open issues](https://github.com/bengeois/tgtg-client/issues) for a list of proposed features (and known issues).

## Contributing

Any contributions you make are **greatly appreciated**.

- If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/bengeois/tgtg-client/issues/new) to discuss it, or directly create a pull request after you edit the _README.md_ file with necessary changes.
- Please make sure you check your spelling and grammar.
- Create individual PR for each suggestion.
- Please also read through the [Code Of Conduct](https://github.com/bengeois/tgtg-client/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/tgtg-client`)
3. Commit your Changes (`git commit -m 'Add some features'`)
4. Push to the Branch (`git push origin feature/tgtg-client`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/bengeois/tgtg-client/blob/main/LICENSE.md) for more information.
