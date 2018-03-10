const projectVersion = require('project-version');
const serviceVersion = require('..')();

test('it should check if the header function returns the correct version field', (done) => {
    const request = {};
    const response = {
        header: (name, value) => {
            expect(name).toBe('x-version');
            expect(value).toBe(projectVersion);

            done();
        }
    };
    const next = function () { };

    serviceVersion(request, response, next);
});