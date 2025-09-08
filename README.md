# Expo Duplicate Header Height Issue

This repository demonstrates a header height issue that occurs in Expo after upgrading to the latest version.

## Issue Description

After upgrading to the latest Expo version, there appears to be a problem with duplicate or incorrect header heights in nested stack navigators. This issue affects the visual layout and user experience of the application.

## Versions

- **Expo**: ~53.0.22
- **React Native**: 0.79.6
- **React**: 19.0.0

## Demonstration

The issue can be observed in the following GIF:

<img src="./data/Wrong%20Header%20Height%20in%20nested%20Stacks.gif" alt="Wrong Header Height in nested Stacks" width="300" />

## Project Structure

This project uses Expo Router with file-based routing and includes:

- Nested stack navigators
- Multiple layout files demonstrating the issue
- Portal-based navigation structure

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npx expo start
   ```

3. Navigate through the app to observe the header height issue in the nested stack navigators.

## Reproduction Steps

1. Run the app using the commands above
2. Navigate to the portal section
3. Observe the incorrect header heights in the nested navigation structure
4. The issue is particularly visible when transitioning between different screens within the portal

## Expected vs Actual Behavior

- **Expected**: Headers should have consistent and appropriate heights across all screens
- **Actual**: Headers appear to have duplicate or incorrect heights, causing visual inconsistencies

## Related Issues

This repository serves as a demonstration case for reporting and tracking the header height issue in Expo's latest version.
