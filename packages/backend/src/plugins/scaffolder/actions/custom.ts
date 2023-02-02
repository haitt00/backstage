/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { createTemplateAction } from '@backstage/plugin-scaffolder-backend';

const child_process = require('child_process');

export const createGenerateJHipsterAction = () => {
  return createTemplateAction<{}>({
    id: 'jhipster:monolithic',
    schema: {
      input: {
        type: 'object',
      },
    },
    async handler(ctx) {
      await new Promise<void>((resolve, reject) => {
        const process = child_process.spawn(
          `jhipster`,
          ['--skip-git', '--skip-checks', '' + '--skip-install'],
          {
            cwd: ctx.workspacePath,
            stdio: ['inherit', 'pipe', 'pipe'],
          },
        );

        process.stdout.on('data', stream => {
          ctx.logStream.write(stream);
        });
        process.stderr.on('data', stream => {
          ctx.logStream.write(stream);
        });
        ctx.logger.info(`PID  ${process.pid}`);

        process.on('close', code => {
          ctx.logger.info('close jhipster');
          return resolve();
        });
        process.on('disconnect', code => {
          ctx.logger.info('disconnect jhipster');
          return resolve();
        });
        process.on('error', code => {
          ctx.logger.info('error jhipster');
          return resolve();
        });
        process.on('exit', code => {
          ctx.logger.info('exit jhipster');
          return resolve();
        });
      });
    },
  });
};
