package com.example.blog.service;

import com.example.blog.entity.Post;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.TreeSet;
import java.util.stream.Collectors;


/**
 * @author 言曌
 * @date 2022/2/5 5:50 下午
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class PostTagRefServiceTest {

    @Autowired
    private PostTagRefService postTagRefService;

    @Test
    public void findTop10PostByTagId() {
        List<Post> totalList = postTagRefService.findTop10PostByTagId(332L);
        System.out.println(totalList);
        // 去重
        totalList = totalList.stream().distinct().collect(Collectors.collectingAndThen(Collectors.toCollection(() -> new TreeSet<>(Comparator.comparing(o -> o.getId()))),
                ArrayList::new));
        // 排序
        totalList = totalList.stream().sorted(Comparator.comparing(Post::getPostViews).reversed()).collect(Collectors.toList());
        System.out.println(totalList);

    }
}
