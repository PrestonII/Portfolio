describe('Processor', function () {
    var processor;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('app.core'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function (_dataprocessor_) {
        processor = _dataprocessor_;
    }));

    describe('on creation',
        function() {
            // A simple test to verify the Project Controller exists
            it('should exist',
                function() {
                    expect(processor).toBeDefined();
                });

            // A simple test to verify the method all exists
            it('should have a currentData object',
                function () {
                    expect(processor.currentData).toBeDefined();
                });
        });

    // A set of tests for our Users.all() method
    describe('.sanitize()',
        function() {
            // A simple test to verify the method all exists
            it('should exist',
                function() {
                    expect(processor.sanitize).toBeDefined();
                });

            // A simple test to verify the method all exists
            it('should convert "Feature/ \n Lines" to "Feature/ Lines"',
                function () {
                    var title = ["Feature/", "\n", "Lines"];

                    var processed = processor.sanitize(title);
                    var expectation = "Feature/</br>Lines";

                    expect(processed).toEqual(expectation);
                });
        });

    // A set of tests for our processor.convertArray() method
    describe('.convertArray()',
        function () {
            // A simple test to verify the method all exists
            it('should exist',
                function () {
                    expect(processor.convertArray).toBeDefined();
                });

            // A simple test to verify the method all exists
            it('should convert "Feature/ \n Lines" to "Feature/ Lines"',
                function () {
                    var title = ["Feature/", "\n", " Lines"];

                    var processed = processor.convertArray(title);
                    var expectation = "Feature/\n Lines";

                    expect(processed).toEqual(expectation);
                });
        });

    // A set of tests for our processor.convertArray() method
    describe('.hasEscapes()',
        function() {
            // A simple test to verify the method all exists
            it('should exist',
                function() {
                    expect(processor.hasEscapes).toBeDefined();
                });

            // A simple test to verify the method all exists
            it('should say that "Feature/ \n Lines" contains escapes',
                function() {
                    //var title = ["Feature/", "\n", " Lines"];
                    var item = "Feature/\n Lines";

                    var answer = processor.hasEscapes(item);

                    expect(answer).toBe(true);
                });
        });

    // A set of tests for our processor.convertArray() method
    describe('.convertEscapeSequences()',
        function () {
            // A simple test to verify the method all exists
            it('should exist',
                function () {
                    expect(processor.convertEscapeSequences).toBeDefined();
                });

            // A simple test to verify the method all exists
            it('should change \n to </br>',
                function () {
                    //var title = ["Feature/", "\n", " Lines"];
                    var item = "Feature/\nLines";
                    var expectation = "Feature/</br>Lines";

                    var processed = processor.convertEscapeSequences(item);

                    expect(expectation).toEqual(processed);
                });
        });

});