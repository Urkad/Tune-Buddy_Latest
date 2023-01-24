package com.example.backend.security;

import com.example.backend.models.MyUser;
import com.example.backend.repo.UserRepo;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserDetailService implements UserDetailsService {

    private final UserRepo userRepo;

    public UserDetailService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public MyUser loadUserByUsername(String name) throws UsernameNotFoundException {
        com.example.backend.models.User domainUser=  userRepo.findByName(name).orElseThrow(() -> new UsernameNotFoundException(name + " not found!"));

        MyUser myUser=new MyUser();
        myUser.setUser(domainUser);
        myUser.setAuthorities(myUser.getAuthorities());

        return myUser;
    }
}
