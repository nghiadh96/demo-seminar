<template>
    <div class="bad-component">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <button @click="handleClick">Click me</button>
        <div v-if="condition">
            <span>{{ undefinedVar }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "BadComponent",
    data() {
        return {
            title: "Hello World",
            undefinedVariable: "not defined",
            message: "This is a message",
            condition: true,
            unusedData: "not used anywhere",
            color: ["red", "blue", "green"],
        }
    },
    methods: {
        largeFunction() {
            const veryLongVariableNameThatExceedsOneHundredCharactersToTestPrettierPrintWidthConfigurationAndSeeHowItHandlesLongLinesOfCode =
                "This is a very long string that should definitely exceed 100 characters to test the printWidth setting in Prettier configuration"
            const anotherExtremelyLongVariableNameThatWillDefinitelyExceedThePrintWidthLimitOfOneHundredCharactersInPrettierConfiguration =
                "Another super long string value that goes way beyond the 100 character limit to properly test Prettier's line wrapping functionality"
            const yetAnotherIncrediblyLongVariableNameThatIsDesignedToTestThePrintWidthSettingInPrettierAndSeeHowItHandlesLongVariableNamesAndStringValues =
                "This string is intentionally made very long to test Prettier's printWidth configuration and see how it wraps long lines of code"
            console.log(
                "This is a very long console.log statement that exceeds 100 characters to test Prettier's printWidth setting and see how it handles long lines",
            )
            console.log(
                "Another extremely long console.log statement that goes way beyond the 100 character limit to properly test Prettier's line wrapping functionality",
            )
            const longObjectWithManyProperties = {
                property1:
                    "This is a very long property value that exceeds 100 characters to test Prettier's printWidth setting",
                property2:
                    "Another extremely long property value that goes way beyond the 100 character limit",
                property3:
                    "Yet another incredibly long property value designed to test Prettier's line wrapping functionality",
                property4:
                    "This property value is intentionally made very long to test Prettier's printWidth configuration",
                property5:
                    "Another super long property value that should definitely exceed 100 characters to test the printWidth setting",
            }
            const longArrayWithManyStringElements = [
                "This is a very long array element that exceeds 100 characters to test Prettier's printWidth setting",
                "Another extremely long array element that goes way beyond the 100 character limit",
                "Yet another incredibly long array element designed to test Prettier's line wrapping functionality",
                "This array element is intentionally made very long to test Prettier's printWidth configuration",
                "Another super long array element that should definitely exceed 100 characters to test the printWidth setting",
            ]
            const longFunctionCall =
                this.someVeryLongFunctionNameThatExceedsOneHundredCharactersToTestPrettierPrintWidthConfiguration(
                    "This is a very long parameter that exceeds 100 characters to test Prettier's printWidth setting",
                    "Another extremely long parameter that goes way beyond the 100 character limit",
                    "Yet another incredibly long parameter designed to test Prettier's line wrapping functionality",
                )
            const longTernaryOperator =
                veryLongVariableNameThatExceedsOneHundredCharactersToTestPrettierPrintWidthConfigurationAndSeeHowItHandlesLongLinesOfCode.length >
                100
                    ? "This is a very long string value for the true case that exceeds 100 characters to test Prettier's printWidth setting"
                    : "This is a very long string value for the false case that exceeds 100 characters to test Prettier's printWidth setting"
            const longConditionalStatement =
                veryLongVariableNameThatExceedsOneHundredCharactersToTestPrettierPrintWidthConfigurationAndSeeHowItHandlesLongLinesOfCode.length >
                    100 &&
                anotherExtremelyLongVariableNameThatWillDefinitelyExceedThePrintWidthLimitOfOneHundredCharactersInPrettierConfiguration.length >
                    100 &&
                yetAnotherIncrediblyLongVariableNameThatIsDesignedToTestThePrintWidthSettingInPrettierAndSeeHowItHandlesLongVariableNamesAndStringValues.length >
                    100
            const longAssignmentStatement =
                veryLongVariableNameThatExceedsOneHundredCharactersToTestPrettierPrintWidthConfigurationAndSeeHowItHandlesLongLinesOfCode +
                anotherExtremelyLongVariableNameThatWillDefinitelyExceedThePrintWidthLimitOfOneHundredCharactersInPrettierConfiguration +
                yetAnotherIncrediblyLongVariableNameThatIsDesignedToTestThePrintWidthSettingInPrettierAndSeeHowItHandlesLongVariableNamesAndStringValues
            return {
                longVariableName:
                    veryLongVariableNameThatExceedsOneHundredCharactersToTestPrettierPrintWidthConfigurationAndSeeHowItHandlesLongLinesOfCode,
                anotherLongVariableName:
                    anotherExtremelyLongVariableNameThatWillDefinitelyExceedThePrintWidthLimitOfOneHundredCharactersInPrettierConfiguration,
                yetAnotherLongVariableName:
                    yetAnotherIncrediblyLongVariableNameThatIsDesignedToTestThePrintWidthSettingInPrettierAndSeeHowItHandlesLongVariableNamesAndStringValues,
                longObject: longObjectWithManyProperties,
                longArray: longArrayWithManyStringElements,
                longFunctionCall: longFunctionCall,
                longTernaryOperator: longTernaryOperator,
                longConditionalStatement: longConditionalStatement,
                longAssignmentStatement: longAssignmentStatement,
            }
        },
    },
    computed: {
        unusedComputed() {
            return "unused computed"
        },
    },
}
</script>

<style>
.bad-component {
    color: red;
    background-color: blue;
    margin: 10px;
    padding: 5px;
}
</style>
// test comment
