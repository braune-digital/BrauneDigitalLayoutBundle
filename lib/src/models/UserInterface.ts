/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 5:04 PM Braune Digital GmbH
 */


import {MediaInterface} from './MediaInterface';

export interface UserInterface {
    username: string;
    email: string;
    enabled: boolean;
    salt: string;
    password: string;
    lastLogin: string;
    confirmationToken: string;
    passwordRequestedAt: string;
    roles: Array<any>;
    id: number;
    passwordResetToken: string;
    token: string;
    firstname: string;
    lastname: string;
    fullname: string;
    description: string;
    avatar: MediaInterface;
    createdAt: string;
    position: number;
    deleted: boolean;
}
