import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

const Tablayout = () => {
  const TabIcon = ({
    icon,
    focused,
    color,
    name,
  }: {
    icon: any;
    focused: any;
    color: string;
    name: string;
  }) => {
    return (
      <View style={{alignItems:"center", justifyContent:"center",gap:5, alignContent:"center", paddingTop:5}}>
        <Image source={icon} resizeMode="contain" tintColor={color} />
        <Text style={{}}>{name}</Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // backgroundColor: "#161622",
          // borderTopWidth: 1,
          // borderTopColor: "#232533",
          height: 90,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="articles"
        options={{
          title: "article",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.article}
              color={color}
              name="Article"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="plus"
        options={{
          title: "plus",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name=""
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.search}
              color={color}
              name="search"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "menu",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.menu}
              color={color}
              name="menu"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Tablayout;

const styles = StyleSheet.create({});
