import { Platform } from "react-native";
import { SegmentedControlIOS, type SegmentedControlIOSProps } from "./SegmentedControlIOS";
import { SegmentedControlAndroid, type SegmentedControlAndroidProps } from "./SegmentedControlAndroid";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import type { SegmentedControlProps } from "../types";


export * from './SegmentedControlIOS'
export * from './SegmentedControlAndroid'

export const SegmentedControl: React.FC<SegmentedControlProps | SegmentedControlIOSProps | SegmentedControlAndroidProps> = (props) => {
  return (
    <GestureHandlerRootView>
      {Platform.OS === 'android' 
                        ? <SegmentedControlAndroid {...props} />
                        : <SegmentedControlIOS {...props} />
      }
    </GestureHandlerRootView>
  )
}
