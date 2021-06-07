package com.fullstackproject.UserSecurity.Security.Services;

import com.fullstackproject.UserSecurity.Model.User;

public interface UserService {

	void updateUser(User user);
	User getUserById(String id);
}
