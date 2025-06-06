package utils

import java.util.Timer
import java.util.TimerTask
import kotlin.concurrent.timer
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class Timer(private val intervalMillis: Long, reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private var timer: Timer? = null
    private var elapsedTimeMillis: Long = 0
    private var startTimeMillis: Long = 0

    fun startTimer() {
        stopTimer() // Ensure no previous timer is running
        startTimeMillis = System.currentTimeMillis()
        timer = timer(period = intervalMillis) {
            updateElapsedTime()
        }
    }

    private fun updateElapsedTime() {
        elapsedTimeMillis = System.currentTimeMillis() - startTimeMillis
        println("Elapsed Time: $elapsedTimeMillis ms")
    }

    fun resetTimer() {
        stopTimer()
        elapsedTimeMillis = 0
        println("Timer reset to 0 ms")
    }

    fun stopTimer() {
        timer?.cancel()
        timer = null
        println("Timer stopped")
    }

    fun getElapsedTime(): Long {
        return elapsedTimeMillis
    }
}