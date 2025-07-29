const csrfToken = document.cookie
        .split('; ')
        .find((row) => row.startsWith('XSRF-TOKEN='))
        ?.split('=')[1];

      const ui = SwaggerUIBundle({
        url: '/api-json',
        dom_id: '#swagger-ui',
        requestInterceptor: (req) => {
          if (csrfToken) {
            req.headers['x-csrf-token'] = csrfToken;
          }
          return req;
        },
      });