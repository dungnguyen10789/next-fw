module.exports = function (plop) {
  plop.setGenerator('page', {
    description: 'Generate a new Next.js page in /src/app',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'Path under /src/app (e.g. auth/forgot-password):',
      },
    ],
    actions: function (data) {
      const parts = data.path.split(/[\\/]/);
      data.name = parts[parts.length - 1]; // 🔥 derive name automatically
      return [
        {
          type: 'add',
          path: 'src/app/{{path}}/page.tsx',
          templateFile: 'plop-templates/page.tsx.hbs',
        },
      ];
    },
  });

  plop.setGenerator('component', {
    description: 'Generate a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component.tsx.hbs',
      },
    ],
  });
};
