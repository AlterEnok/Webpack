import { createLogger } from '../logger';

it('Should return stored logs', () => {
    const logger = createLogger('user login');
    expect(logger.getLogs()).toEqual([]);
});

it('Should save log message', () => {
    const logger = createLogger('user login');
    logger.log('Login success');

    expect(logger.getLogs()).toEqual(['log - user login - login success']);
});

it('Should save errors', () => {
    const logger = createLogger('user login');
    logger.error('Login failed');

    expect(logger.getLogs()).toEqual(['error - user login - login failed']);
});