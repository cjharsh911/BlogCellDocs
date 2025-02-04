# Setting Up a Personal Workbook for VBA Code in Any Excel Workbook

Excel’s **Personal Macro Workbook** is a hidden workbook that loads every time you launch Excel. It allows you to store VBA macros in one central location, making your automation tools available across all workbooks without the need to copy the code each time.

---

## Personal Macro Workbook

The **Personal Macro Workbook** (`PERSONAL.XLSB`) is a hidden workbook that opens automatically with Excel. It serves as a central repository for your VBA code, making your macros available for use in any workbook you work on.

---

## Creating Your Personal Macro Workbook

To create your Personal Macro Workbook, follow these steps:

1. **Open Excel:**
   - Launch Excel normally.

2. **Enable the Developer Tab:**
   - Navigate to **File > Options > Customize Ribbon**.
   - Check the **Developer** option in the right pane and click **OK**.

3. **Record a Dummy Macro:**
   - Go to the **Developer** tab and click **Record Macro**.
   - In the **Record Macro** dialog:
     - **Macro Name:** Enter a name (e.g., `DummyMacro`).
     - **Store Macro in:** Choose **Personal Macro Workbook**.
   - Click **OK** and immediately click **Stop Recording**.

4. **Save the Personal Macro Workbook:**
   - When prompted upon closing Excel, save the changes to `PERSONAL.XLSB`.

---

## Accessing and Editing

To add or update your VBA code in `PERSONAL.XLSB`:

1. **Open the VBA Editor:**
   - Press `Alt + F11` to launch the Visual Basic for Applications (VBA) editor.

2. **Locate `PERSONAL.XLSB`:**
   - In the **Project Explorer** (if not visible, press `Ctrl + R`), find the `PERSONAL.XLSB` project.

3. **Unhide the Personal Macro Workbook (Optional):**
   - Return to Excel and go to **View > Unhide**.
   - Select `PERSONAL.XLSB` from the list and click **OK**.
   - *Tip:* Unhiding is useful for making edits, but remember to hide it again when done.

4. **Add or Modify VBA Code:**
   - In the VBA editor, right-click on `Modules` under `PERSONAL.XLSB` and choose **Insert > Module**.
   - Add your VBA code. For example:

   ```js
   Sub ExampleMacro()
       MsgBox "Hello, this is your personal macro!"
   End Sub

